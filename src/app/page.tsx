import Image from "next/image";
import {supabase} from "./lib/supabase";
import { redirect } from "next/navigation";

export default function Home() {

  const setNewView = async() => {
    const { data, error } = await supabase
    .from('views')
    .insert({
       name: "random name2" 
      })

      if(data) console.log(data)
      if(error) console.log(error)
  };

  setNewView();

  redirect('/login');
  return <div>hello</div>
}
