import React from "react";
// Pages
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard.js"));
const CampaignTable = React.lazy(()=> import("./pages/Campaign/Campaigntable/CampaignTable.js"))
const CreateCampaign = React.lazy(()=> import("./pages/Campaign/CreateCampaign/CreateCampaign.js"))
const Report = React.lazy(()=> import("./pages/Report/Report.js"))
const Payment = React.lazy(()=> import("./pages/Payment/Payment.js"))
const Account = React.lazy(()=> import("./pages/Account/Account.js"))


const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard, exact: true },
  { path: "/CampaignTable", name: "CampaignTable", element: CampaignTable, exact: true },
  { path: "/CreateCampaign", name: "CreateCampaign", element: CreateCampaign, exact: true },
  { path: "/Report", name: "CreateCampaign", element: Report, exact: true },
  { path: "/payment", name: "CreateCampaign", element: Payment, exact: true },
  { path: "/Account", name: "CreateCampaign", element: Account, exact: true },
 
];

export default routes;
