/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

export default function Navbar(){
    return (
        
        <nav className='navbar navbar-nav me-auto navbar-expand-md navbar-dark bg-dark styles.navbar'>
            <div className='container-fluid callus'>

            <Link className='navbar-brand' href="/" passHref>
               <img
                    src='/images/logo-dark.webp' 
                    alt='logo' 
                    width={100} height={75} left={0} className='logo'></img></Link>
       

<MDBDropdown data-mdb-dropdown-animation="off">
      <MDBDropdownToggle>
      Call Us Today!
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
        <MDBDropdownLink href="tel:16048553315">604-855-3315 - Abbotsford Campus</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
        <MDBDropdownLink href="tel:16045324040">604-532-4040 - Langley Campus</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
</MDBDropdown>
      

<p>HI</p>


            
            </div>
        </nav>
    );
}