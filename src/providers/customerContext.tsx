'use client'
import React, {createContext,useState,useEffect,ReactNode} from 'react'
import prismaClient from '@/lib/prisma'

interface Customer{
    id:string;
    name:string;
}

interface CustomerContextType{
    customers: Customer[];
    setCustomers: (customers: Customer[]) => void;
}



export const CustomerContext = createContext<CustomerContextType| undefined>(undefined);

export const CustomerProvider = ({children}:{children:ReactNode})=>{
    const [customers,setCustomers]=useState <Customer[]>([])

    useEffect(()=>{
        async function fetchCustomer() {
            const response = await prismaClient.customer.findMany();
            setCustomers(response)
        }
        fetchCustomer()
        
    },[]);
    return(
        <CustomerContext.Provider value={{customers,setCustomers}}>
            {children}
        </CustomerContext.Provider>
    )
}

export const useCustomer=()=>{
    const context = React.useContext(CustomerContext)
    if (!context) {
        throw new Error('useCustomer must be used within a CustomerProvider')
    }
    return context
}