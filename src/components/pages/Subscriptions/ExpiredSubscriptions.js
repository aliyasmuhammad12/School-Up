import React, { useState } from 'react';
import Box from "../../styled/Box";
import Flex from '../../styled/Flex';
import Heading from '../../styled/Typography/Heading';
import './style.css'
import Tabs  from '../../styled/Tabs/Tabs';
import {
  Table,
  TableBody,
  TableBodyData,
  TableHead,
  TableHeadData,
  TableRow,
  TableText,
} from "../../styled/Table/Table";
import { Link } from "react-router-dom";
import Pagination from '../../pagination/Pagination';


function ExpiredSubscriptions() {

const [activeOption, setActiveOption] = useState("Expired Subscriptions");


  return (
    <Box className='schoolup-outer-div'>
        <Flex gap='15' direction='column'>
          <Flex justify='space-between' align='center'>
        <Heading>Subscription Details</Heading>
        {/* <button className='add-subscription-btn'>Add Subscription </button> */}
          </Flex>
        <Tabs 
        options={["All Subscriptions","Active Subscriptions", "Expired Subscriptions"]}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        width={759}
        />
        {activeOption === "All Subscriptions" && (
             <Table>
             <TableHead>
               <TableHeadData>ID</TableHeadData>
               <TableHeadData>School Name</TableHeadData>
               <TableHeadData>Branch</TableHeadData>
               <TableHeadData>Amount</TableHeadData>
               <TableHeadData>Contact No</TableHeadData>
               <TableHeadData>Emails</TableHeadData>
               <TableHeadData>Status</TableHeadData>
             </TableHead>
             <TableBody>
               <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "unpaid" }}>Expired</TableText>
                 </TableBodyData>
               </TableRow>
               <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
                 </TableBodyData>
               </TableRow>
               <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
                 </TableBodyData>
               </TableRow>
               <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
                 </TableBodyData>
               </TableRow>
             </TableBody>
           </Table>
        ) }
        {activeOption === "Active Subscriptions" && (
          <Table>
          <TableHead>
            <TableHeadData>ID</TableHeadData>
            <TableHeadData>School Name</TableHeadData>
            <TableHeadData>Branch</TableHeadData>
            <TableHeadData>Amount</TableHeadData>
            <TableHeadData>Contact No</TableHeadData>
            <TableHeadData>Emails</TableHeadData>
            <TableHeadData>Status</TableHeadData>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableBodyData>
                <Link>
                  <TableText variant="link">10051</TableText>
                </Link>
              </TableBodyData>
              <TableBodyData>
                <TableText>Army Public School</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>Jutial</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>$23008645</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>03445568654</TableText>
              </TableBodyData>
              <TableBodyData>
                <TableText>15 Aug 2023</TableText>
              </TableBodyData>
              <TableBodyData>
              <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
              </TableBodyData>
            </TableRow>
            <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "unpaid" }}>Unpaid</TableText>
                 </TableBodyData>
               </TableRow>
               <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "unpaid" }}>Expired</TableText>
                 </TableBodyData>
               </TableRow>
               <TableRow>
                 <TableBodyData>
                   <Link>
                     <TableText variant="link">10051</TableText>
                   </Link>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Army Public School</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>Jutial</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>$23008645</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>03445568654</TableText>
                 </TableBodyData>
                 <TableBodyData>
                   <TableText>15 Aug 2023</TableText>
                 </TableBodyData>
                 <TableBodyData>
                 <TableText variant={{ type: "simple", status: "paid" }}>Paid</TableText>
                 </TableBodyData>
               </TableRow>
          </TableBody>
        </Table>
        )} 
        {activeOption === "Expired Subscriptions" && (
            <Table>
            <TableHead>
              <TableHeadData>ID</TableHeadData>
              <TableHeadData>School Name</TableHeadData>
              <TableHeadData>Branch</TableHeadData>
              <TableHeadData>Amount</TableHeadData>
              <TableHeadData>Contact No</TableHeadData>
              <TableHeadData>Emails</TableHeadData>
              <TableHeadData>Status</TableHeadData>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
              <TableRow>
                <TableBodyData>
                  <Link>
                    <TableText variant="link">10051</TableText>
                  </Link>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Army Public School</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>Jutial</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>$23008645</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>03445568654</TableText>
                </TableBodyData>
                <TableBodyData>
                  <TableText>15 Aug 2023</TableText>
                </TableBodyData>
                <TableBodyData>
                <TableText variant={{ type: "simple", status: "expired" }}>Expired</TableText>
                </TableBodyData>
              </TableRow>
             
            </TableBody>
          </Table>
        )}
        </Flex>
        <Pagination/>
    </Box>
  )
}

export default ExpiredSubscriptions