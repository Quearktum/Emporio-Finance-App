using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace api.Helper
{
    public static class JsonParser
    {
        public static double ParseJsonNumberDouble(this JToken token, double defaultValue)
        {
            if (token == null) return defaultValue;

            try
            {
                return token.Value<double>();
            }
            catch
            {
                System.Console.WriteLine("Err Err at ParseJsonNumberDouble");
                return defaultValue;
            }
        }

        public static long ParseJsonNumberLong(this JToken token, long defaultValue)
        {
            if (token == null) return defaultValue;

            try
            {
                return token.Value<long>();
            }
            catch
            {
                try
                {
                    return (long)token.Value<double>();
                }
                catch
                {
                    System.Console.WriteLine("Err Err at ParseJsonNumberLong");
                    return defaultValue;
                }
            }
        }
    }
}