import CircularProgress from "./components/CircularProgress";
import Nav from "./components/Nav";
import Table from "./components/Table";
import customerData from "./data.json";


function App() {

  const totalCustomers = customerData.length;

  const activeCustomers = customerData.filter((customer) => customer.activeStatus).length;
  const inactiveCustomers = totalCustomers - activeCustomers;

  const activePercentage = Math.floor((activeCustomers / totalCustomers) * 100);
  const inactivePercentage = Math.floor((inactiveCustomers / totalCustomers) * 100);


  return (
    <div className="flex">
      <div className="w-1/5">
        <Nav />
      </div>
      <div className="w-4/5">
        <div className="flex justify-between p-4">
          <h1 className="font-extrabold text-2xl">Orders</h1>
          <button className="p-2 bg-blue-800 text-white rounded-lg">
            + Add Order
          </button>
        </div>
        <div className="flex">
          <div className="bg-blue-100 p-4 w-auto rounded-lg">
            <h1 className="font-bold">All customers</h1>
            <div className="flex m-2 ">
              <CircularProgress
                textName={"Customer Name"}
                percentage={85}
                color={`stroke-current fill-none text-blue-500`}
              />
              <CircularProgress
                textName={"New Customers"}
                percentage={66}
                color={`stroke-current fill-none text-green-500`}
              />
              <CircularProgress
                textName={"Target Customers"}
                percentage={90}
                color={`stroke-current fill-none text-red-500`}
              />
              <CircularProgress
                textName={"Retarget Customers"}
                percentage={30}
                color={`stroke-current fill-none text-pink-300`}
              />
            </div>
          </div>
          <div className="w-full m-2 bg-blue-100 p-4 rounded-lg">
            <h1 className="font-bold">Stats Overview</h1>
            <div className="m-4">
              <label className="my-2 mx-4 text-xs text-gray-500">Active</label>
              <div className="w-full bg-gray-200 rounded-full  h-2.5">
                <div className="bg-green-300 h-2.5 rounded-full w-full"style={{ width: `${activePercentage}%` }} ></div>
              </div>
              <label className="flex justify-end my-2 mx-4 text-xs text-gray-500">{activePercentage}%</label>
            </div>

            <div className="m-4">
              <label className="my-2 mx-4 text-xs text-gray-500">Inactive</label>
              <div className="w-full bg-gray-200 rounded-full  h-2.5">
                <div className="bg-red-300 h-2.5 rounded-full w-full"style={{ width: `${inactivePercentage}%` }} ></div>
              </div>
              <label className="flex justify-end my-2 mx-4 text-xs text-gray-500">{inactivePercentage}%`</label>
            </div>
          </div>
          <div></div>
        </div>
        <div className="m-4">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
