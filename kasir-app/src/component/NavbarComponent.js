import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Kasir APP", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    // <Disclosure as="nav" className="bg-blue-800">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* Mobile menu button*/}
    //         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //           <span className="absolute -inset-0.5" />
    //           <span className="sr-only">Open main menu</span>
    //           <Bars3Icon
    //             aria-hidden="true"
    //             className="block size-6 group-data-[open]:hidden"
    //           />
    //           <XMarkIcon
    //             aria-hidden="true"
    //             className="hidden size-6 group-data-[open]:block"
    //           />
    //         </DisclosureButton>
    //       </div>
    //       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="flex shrink-0 items-center">
    //           <img
    //             alt="Your Company"
    //             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
    //             className="h-8 w-auto"
    //           />
    //         </div>
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             {navigation.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 aria-current={item.current ? "page" : undefined}
    //                 className={classNames(
    //                   item.current
    //                     ? "bg-blue-900 text-white"
    //                     : "text-blue-300 hover:bg-blue-700 hover:text-white",
    //                   "rounded-md px-3 py-2 text-sm font-medium"
    //                 )}
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         <button
    //           type="button"
    //           className="relative rounded-full bg-blue-800 p-1 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
    //         >
    //           <span className="absolute -inset-1.5" />
    //           <span className="sr-only">View notifications</span>
    //           <BellIcon aria-hidden="true" className="size-6" />
    //         </button>

    //         {/* Profile dropdown */}
    //         <Menu as="div" className="relative ml-3">
    //           <div>
    //             <MenuButton className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
    //               <span className="absolute -inset-1.5" />
    //               <span className="sr-only">Open user menu</span>
    //               <img
    //                 alt=""
    //                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                 className="size-8 rounded-full"
    //               />
    //             </MenuButton>
    //           </div>
    //           <MenuItems
    //             transition
    //             className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //           >
    //             <MenuItem>
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-blue-700 data-[focus]:bg-blue-100 data-[focus]:outline-none"
    //               >
    //                 Your Profile
    //               </a>
    //             </MenuItem>
    //             <MenuItem>
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-blue-700 data-[focus]:bg-blue-100 data-[focus]:outline-none"
    //               >
    //                 Settings
    //               </a>
    //             </MenuItem>
    //             <MenuItem>
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-blue-700 data-[focus]:bg-blue-100 data-[focus]:outline-none"
    //               >
    //                 Sign out
    //               </a>
    //             </MenuItem>
    //           </MenuItems>
    //         </Menu>
    //       </div>
    //     </div>
    //   </div>

    //   <DisclosurePanel className="sm:hidden">
    //     <div className="space-y-1 px-2 pb-3 pt-2">
    //       {navigation.map((item) => (
    //         <DisclosureButton
    //           key={item.name}
    //           as="a"
    //           href={item.href}
    //           aria-current={item.current ? "page" : undefined}
    //           className={classNames(
    //             item.current
    //               ? "bg-blue-900 text-white"
    //               : "text-blue-300 hover:bg-blue-700 hover:text-white",
    //             "block rounded-md px-3 py-2 text-base font-medium"
    //           )}
    //         >
    //           {item.name}
    //         </DisclosureButton>
    //       ))}
    //     </div>
    //   </DisclosurePanel>
    // </Disclosure>
    <div>
      <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div class="px-4">
          <div class="flex items-center justify-between">
            <div class="flex shrink-0">
              <a aria-current="page" class="flex items-center" href="/">
                <img
                  class="h-7 w-auto"
                  src="https://images.vexels.com/content/158440/preview/burger-logo-food-logotype-silhouette-ef3722.png"
                  alt=""
                />
                <p class="sr-only">Website Title</p>
              </a>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                MakanYuk!
              </a>
              {/* <a
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Pricing
              </a> */}
            </div>
            {/* <div class="flex items-center justify-end gap-3">
              <a
                class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/login"
              >
                Sign in
              </a>
              <a
                class="inline-flex items-center justify-center rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Login
              </a>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}
