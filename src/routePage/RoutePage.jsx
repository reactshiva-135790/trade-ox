import * as React from "react";

import { useRoutes } from "react-router-dom";

import { Home } from "../pages/home/Home";

import { AddLiquidity } from "../pages/liquidity/addLiquidity/AddLiquidity";

import { RemoveLiquidity } from "../pages/liquidity/removeLiquidity/RemoveLiquidity"

import { ErrorPage } from "../pages/errorPage/ErrorPage";

import TermsAndServices from "../pages/terms&Service/TermsAndServices";

import Policy from "../pages/policy/Policy"

import MainSwap from "../pages/mainSwap/MainSwap";

import Contact from "../pages/contactPage/Contact"

import { TabPage } from "../common/tabs/TabPage";

function Routepage() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "trade",
      element: <MainSwap />,
    },
    {
      path: "add-liquidity",
      element: <AddLiquidity />,
    },
    {
      path: "remove-liquidity",
      element: <RemoveLiquidity />,
    },
    {
      path: "terms-and-services",
      element: <TermsAndServices />,
    },
    {
      path: "policy-and-policy",
      element: <Policy />,
    },
    {
      path: "contact-us",
      element: <Contact />,
    },
    {
      path: "contact-us",
      element: <Contact />,
    },
    {
      element: <TabPage />,
      children: [
        { path: "add-liquidity", element: <AddLiquidity /> },
        { path: "remove-liquidity", element: <RemoveLiquidity /> },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />
    },

  ]);

  return element;
}

export { Routepage };



