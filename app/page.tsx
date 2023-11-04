import Image from "next/image";
import indiaFlag from "@/public/indiaflag.svg";
import pakistanFlag from "@/public/pakistanflag.svg";
import israelFlag from "@/public/israelflag.svg";
import palestineFlag from "@/public/palestineflag.svg";
import zimbabweFlag from "@/public/zimbabweflag.svg";

const countries = [
  {
    name: "India",
    icon: indiaFlag,
    alt: "Flag of india",
  },
  {
    name: "Pakistan",
    icon: pakistanFlag,
    alt: "Flag of pakistan",
  },
  {
    name: "Israel",
    icon: israelFlag,
    alt: "Flag of Israel",
  },
  {
    name: "Palestine",
    icon: palestineFlag,
    alt: "Flag of Palestine",
  },
  {
    name: "Zimbabwe",
    icon: zimbabweFlag,
    alt: "Flag of Zimbabwe",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="grid grid-cols-3 gap-4">
        {countries.map((country, i) => (
          <div
            key={i}
            className="flex flex-col justify-between outline-dotted items-center p-2 rounded-md bg-slate-900"
          >
            <Image
              src={country.icon}
              width={200}
              height={200}
              alt={country.alt}
            />
            <h1 className="mt-2">{country.name}</h1>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mx-2 my-10"
      >
        Choose your culture
      </button>
    </main>
  );
}
