import FormRadio from "@/components/FormRadio";
import QuestionOfStarts from "@/components/QuestionOfStars";
import { iResponse } from "@/interfaces";
import { getApi } from "@/services/getApi";

export default async function Home() {
  const { data } = await getApi.get<iResponse>("/front-test/survey.json");

  const stars = data.itens.filter((question) => question.typeQuestion === 1);

  return (
    <main className="max-w-full -mt-64 flex flex-col items-center justify-between p-24">
      <div className="w-3/5 min-w-80 mb-9">
        <h2 className="text-gray-100 text-left font-semibold text-4xl font-customFont leading-10">
          Pesquisa de Satisfação
        </h2>
      </div>
      <section className="w-3/5 min-w-80 min-h-96 bg-gray-100 rounded-md p-5 flex flex-col">
        <QuestionOfStarts
          content={stars.map((el) => el.content)}
          mandatory={stars.map((el) => el.mandatory)}
        />
      </section>
    </main>
  );
}
