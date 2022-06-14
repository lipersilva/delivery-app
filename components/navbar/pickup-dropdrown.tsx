import { Menu, Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { IconArrowTopDown, IconShoppingBag, IconStore, IconTargetLocation } from '../icon-family'
import { Fragment } from 'react'

export function PickupFilter() {
  const [pickpModeSelected, setPickpModeSelected] = useState("");
  const pickupDefault = "Retirada";
  const pickupOptions = [
    {
      title: "Retirada"
    },
    {
      title: "Entrega"
    }
  ]
  
  const saveLocation = (location:string) => {
    setPickpModeSelected(location);
  }

  useEffect(() => {
    const updateLocation = () => {
      setPickpModeSelected(pickupDefault);
    }
    updateLocation();
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div> 
        <Menu.Button className="flex justify-center items-center w-full">
          <IconShoppingBag size={24} color="#FB6D3A"/>
          {pickpModeSelected}
          <div className="flex">
            <IconArrowTopDown size={16} color="#000000"/>
          </div>
        </Menu.Button> 
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-40 mt-2 bg-gray-200 shadow-md rounded-xl overflow-hidden" >
          {pickupOptions.map((pickup, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => saveLocation(pickup.title)}
                  className={`${active && 'bg-gray-200 text-gray-600'} py-2 px-4`}
                >
                  Retirar
                </button>
              )}
          </Menu.Item>
          ))}
          
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => saveLocation("Entrega")}
                className={`${active && 'bg-gray-200 text-gray-600'} py-2 px-4`}
              >
                Entrega
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}