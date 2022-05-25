import Head from "next/head";
import Image from "next/image";
import { BasicReactTable } from "../src/component/react-table/BasicReactTable";
import { GroupHeaderTable } from "../src/component/react-table/GroupHeaderTable";
import { TestTable } from "../src/component/react-table/TestTable";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="text-center ">
      <h1 className="text-[50px] "> React Table </h1>
      {/* Render react table  */}
      {/* <BasicReactTable /> */}
      {/* <TestTable /> */}
      <GroupHeaderTable />
    </div>
  );
}
