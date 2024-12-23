import Hero from "../(home)/hero";
import Wrapper from '@/components/maxWidthWrapper/wrapper'
import Features from "@/components/features";
import EnergySearch from '@/components/energy_features'
import Quicksearch from "@/components/quicksearch";
import BuyTip from "@/components/buyTip";
import { Separator } from "@/components/ui/separator"
import { SearchForm } from "@/components/searchForm";
import { Displaylist } from "@/components/displaylist";


export default async function Home() {
  return (
    <div className="">
    <section className="m-auto justify-items-center">
    <Wrapper className="w-[90vw]">
      <div className="lg:flex w-full lg:flex-row flex-col">
        <div className="w-[20%] mt-0 mr-2 lg:block">
       <SearchForm  />   
        </div>
        <div className="w-[70vw] justify-center">
          <Displaylist />
          </div>    
</div>
    </Wrapper >
 </section> 

 <section>
    <Wrapper>
    <EnergySearch />
    </Wrapper>
    </section>
    < Separator />
    <section className="min-w-full min-h-[20vh mt-10 bg-background">
      <Wrapper >
        <h1 className="text-2xl text-foreground font-semibold">Tips</h1>
       <div className="sm:max-w-[100%] max-w-full mx-auto flex justify-center space-x-10 text-foreground">
        <div className="flex-grow flex-1 m-10">
          <h1>Buying tips</h1>
          < BuyTip />
        </div>

        <div className="flex-grow flex-1 m-10">
          <h1>Mentaining tips</h1>
        </div>
        </div>
      </Wrapper>
      
      </section>
    <section>
      <Wrapper className="">
    <Quicksearch />
      </Wrapper>
    </section>
  </div>
  );
}

