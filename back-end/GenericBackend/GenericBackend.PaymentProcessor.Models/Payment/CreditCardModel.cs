using System.ComponentModel.DataAnnotations;

namespace GenericBackend.PaymentProcessor.Models
{
    public class CreditCardModel
    {
        [Required(AllowEmptyStrings = false)]
        public string CardNumber { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string ExpirationMonth { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string ExpirationYear { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string Cvv { get; set; }

        public string GetShortExpirationDate()
        {
            if (ExpirationYear.Length == 2)
            {
                return ExpirationMonth + ExpirationYear;
            }

            var shortYear = ExpirationYear.Substring(2, 2);

            return ExpirationMonth + shortYear;
        }
    }
}
