using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Stock;
using api.Helper;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace api.Service
{
    public class FMPService : IFinancialModellingPrepService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _config;
        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var apiKey = _config["FMPKey"];
                var requestUrl = $"https://financialmodelingprep.com/stable/profile?symbol={symbol}&apikey={apiKey}";
                
                var result = await _httpClient.GetAsync(requestUrl);
                
                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();

                    var jArray = JArray.Parse(content);
                    if (jArray.Count == 0)
                    {
                        return null;
                    }

                    var stockJson = jArray[0];
                    var fmpStock = new FMPStock
                    {
                        symbol = stockJson["symbol"]?.ToString(),
                        companyName = stockJson["companyName"]?.ToString(),
                        price = stockJson["price"].ParseJsonNumberDouble(0.0),
                        lastDividend = stockJson["lastDividend"].ParseJsonNumberDouble(0.0),
                        industry = stockJson["industry"]?.ToString(),
                        marketCap = stockJson["marketCap"].ParseJsonNumberLong(0L),
                    };

                    return fmpStock.ToStockFromFMP();
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine($"Exception in FindStockBySymbolAsync: {e.Message}");
                if (e.InnerException != null)
                {
                    Console.WriteLine($"Inner Exception: {e.InnerException.Message}");
                }
                Console.WriteLine($"Stack trace: {e.StackTrace}");
                return null;
            }
        }


    }
}