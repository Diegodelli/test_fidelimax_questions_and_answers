import Form from "@/components/Form";
import StarQuestion from "@/components/StarQuestion";
import { iResponse } from "@/interfaces";
import { getApi } from "@/services/getApi";

export default async function Home() {
  const { data } = await getApi.get<iResponse>("/front-test/survey.json");

  const stars = data.itens.filter((question) => question);

  return (
    <main className="max-w-full -mt-64 flex flex-col items-center justify-between p-24">
      <div className="w-3/5 min-w-80 mb-9">
        <h2 className="text-gray-100 text-left font-semibold text-4xl font-customFont leading-10">
          Pesquisa de Satisfação
        </h2>
      </div>
      <section className="w-3/5 min-w-80 min-h-96 bg-gray-100 rounded-md p-5 flex flex-col">
        <StarQuestion content1={stars[0].content} />
        <Form
          content2={stars[1].content}
          content3={stars[2].content}
          content4={stars[3].content}
          itensSelectQuestion={stars[3].itens}
          content5={stars[4].content}
          itensRadioQuestion={stars[4].itens}
          content6={stars[5].content}
          itensCheckRow={stars[5].itens}
          content7={stars[6].content}
          itensCheckCol={stars[6].itens}
          content8={stars[7].content}
          content8Exemplo={stars[7].answerValue}
        />
      </section>
    </main>
  );
}
