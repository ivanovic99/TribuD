import Link from "next/link";
import { useRouter } from "next/router";
import SideBarItem from "./SidebarItem";
import { ISidebarItem } from "./types";
import { Route } from "next/dist/server/router";

export default function Layout({ children }: { children: any }) {
  const menuItems: ISidebarItem[] = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/clientes",
      title: "Clientes",
    },
    {
      href: "/products",
      title: "Productos",
    },
    /*{
      href: "/productCreate",
      title: "Crear producto",
  },*/
    {
      href: "/resources",
      title: "Recursos",
    },
    {
      href: "/resources/addHours",
      title: "Cargar horas",
    },
    {
      href: "/proyectos",
      title: "Proyectos",
    }
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
      <header className="bg-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase text-white">
        PSA
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-gray-100 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map((item) => (
                <SideBarItem {...item} key={item.title} />
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">
          {/* {router.pathname === "/tickets/:id" && <TicketsDetails ticketId={router.query.id} />} */}
          {children}
        </main>
      </div>
    </div>
  );
}
