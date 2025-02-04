import CreateLinkInput from "@/app/createLink";
import Example from "@/app/example";

export default function Home() {

 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">


      <CreateLinkInput/>

      <Example/>  


      {/* <Stat/>       */}
    </div>
  );
}
