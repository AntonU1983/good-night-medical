using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using GenericBackend.Repository.GoodNightMedical;

namespace GenericBackend.UnitOfWork.GoodNightMedical
{
    public interface IUnitOfWork
    {
        IMongoRepository<Machine> Machines { get; }
        IMongoRepository<RentOption> RentOptions { get; }
        IMongoRepository<MachineOrder> MachineOrders { get; }

    }

    public class UnitOfWork : IUnitOfWork
    {
        private IMongoRepository<Machine> _machines;
        private IMongoRepository<RentOption> _rentOptions;
        private IMongoRepository<MachineOrder> _machineOrders;

        public IMongoRepository<Machine> Machines
        {
            get { return _machines ?? (_machines = new MachineRepository()); }
        }

        public IMongoRepository<RentOption> RentOptions
        {
            get { return _rentOptions ?? (_rentOptions = new RentOptionRepository()); }
        }

        public IMongoRepository<MachineOrder> MachineOrders { get { return _machineOrders ?? (_machineOrders = new MachineOrderRepository()); } }
    }
}
