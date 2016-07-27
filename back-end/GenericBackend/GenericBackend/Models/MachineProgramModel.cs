using System.Collections.Generic;
using GenericBackend.DataModels.GoodNightMedical;

namespace GenericBackend.Models
{
    public class MachineProgramModel
    {
        public RentProgram Program { get; set; }
        public List<Machine> Machines { get; set; }
    }
}