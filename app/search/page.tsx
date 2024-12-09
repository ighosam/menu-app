
import Hero from "../(home)/hero";
import { SelectForm } from "../(home)/searchForm";
import Wrapper from '@/components/maxWidthWrapper/wrapper'
import Features from "@/components/features";
import EnergySearch from '@/components/energy_features'
import Quicksearch from "@/components/quicksearch";
import BuyTip from "@/components/buyTip";
import { Separator } from "@/components/ui/separator"
import { getdb } from "@/components/opendb2";


const makes = await getdb()

export default async function Home() {


  return (
    <div className="bg-background">
    <section className="relative bg-background">
      <Wrapper>
    <Hero />
      </Wrapper>
    </section >
  
    <section >
    <Wrapper >
      <div className="flex-row">
    <SelectForm makes={makes} />
    <Features />
</div>
    </Wrapper >
    
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
