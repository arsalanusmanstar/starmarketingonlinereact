import axios from "axios";
import styled from 'styled-components'
import useSWR from 'swr'
import { useEffect,useState } from "react";
import Modules from "../modules"
const fetcher = (url) => fetch('/expressPost?data='+url,{
  method:'Post',
}).then((res) => res.json());
const Pages = ({ match }) => {
  const { data, error } = useSWR('/pages?_embed=true&slug='+match.path, fetcher)
  return (
    <>
    {console.log(data,'&slug=')}
      <Modules data={data && data[0]['acf']} />
    </>
  );
};
export default Pages;