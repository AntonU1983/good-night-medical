using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using GenericBackend.Repository.Admin;
using GenericBackend.Repository.GoodNightMedical;

namespace GenericBackend.UnitOfWork.GoodNightMedical
{
    public class UnitOfWork : IUnitOfWork
    {
        private IMongoRepository<Machine> _machines;
        private IMongoRepository<RentOption> _rentOptions;
        private IMongoRepository<MachineOrder> _machineOrders;
        private IMongoRepository<Customer> _customers; 
        private IMongoRepository<FullRentCustomer> _fullRentCustomers; 
        private IMongoRepository<RentProgram> _rentPrograms; 
        private IMongoRepository<Setting> _settings;
        private IMongoRepository<AdvertisementInfo> _advertisementInfo;
        public IMongoRepository<Machine> Machines => _machines ?? (_machines = new MachineRepository());

        public IMongoRepository<RentOption> RentOptions => _rentOptions ?? (_rentOptions = new RentOptionRepository());

        public IMongoRepository<MachineOrder> MachineOrders => _machineOrders ?? (_machineOrders = new MachineOrderRepository());

        public IMongoRepository<Customer> Customers => _customers ?? (_customers = new CustomerRepository());
        public IMongoRepository<FullRentCustomer> FullRentCustomers => _fullRentCustomers ?? (_fullRentCustomers = new FullRentCustomerRepository());
        public IMongoRepository<RentProgram> RentPrograms => _rentPrograms ?? (_rentPrograms = new RentProgramRepository());
        public IMongoRepository<Setting> Settings => _settings ?? (_settings = new SettingsRepository());
        public IMongoRepository<AdvertisementInfo> AdvertisementInfo => _advertisementInfo?? (_advertisementInfo = new AdvertisementInfoRepository());
    }
}