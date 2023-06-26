import { useState } from "react";
import WelcomePage from "@/components/steps/WelcomePage";
import DataDiri from "./steps/DataDiri";
import Question1 from "./steps/Question1";
import Question2 from "./steps/Question2";
import Question3 from "./steps/Question3";
import Question4 from "./steps/Question4";
import Question5 from "./steps/Question5";
import Question6 from "./steps/Question6";
import Question7 from "./steps/Question7";
import Question8 from "./steps/Question8";
import Question9 from "./steps/Question9";
import Question10 from "./steps/Question10";
import Question11 from "./steps/Question11";
import ResultPage from "./steps/ResultPage";
import ConfirmPage from "./steps/ConfirmPage";

function Form() {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Welcome",
    "Isi data Anda",
    "1/11",
    "2/11",
    "3/11",
    "4/11",
    "5/11",
    "6/11",
    "7/11",
    "8/11",
    "9/11",
    "10/11",
    "11/11",
  ];
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    phone: "",
    opd: "",
    question1: "",
    evidence1: "",
    question2: "",
    evidence2: "",
    question3: "",
    evidence3: "",
    question4: "",
    evidence4: "",
    question5: "",
    evidence5: "",
    question6: "",
    evidence6: "",
    question7: "",
    evidence7: "",
    question8: "",
    evidence8: "",
    question9: "",
    evidence9: "",
    question10: "",
    evidence10: "",
    question11: "",
    evidence11: "",
    score: "",
    category: "",
    url: "",
    agreement: "",
  });

  const answers = [
    data.question1,
    data.question2,
    data.question3,
    data.question4,
    data.question5,
    data.question6,
    data.question7,
    data.question8,
    data.question9,
    data.question10,
    data.question11,
  ].map((str) => Number(str));

  const sum = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }

    return total;
  };

  const hasil = sum(answers);
  data.score = hasil;

  if (hasil <= 19) {
    data.category = "Sangat rendah";
  } else if (hasil <= 28) {
    data.category = "Rendah";
  } else if (hasil <= 37) {
    data.category = "Sedang";
  } else if (hasil <= 46) {
    data.category = "Tinggi";
  } else if (hasil <= 55) {
    data.category = "Sangat tinggi";
  }

  const SendData = {
    Name: data.name,
    Telephone: data.phone,
    OPD: data.opd,
    Question1: data.question1,
    Evidence1: data.evidence1,
    Question2: data.question2,
    Evidence2: data.evidence2,
    Question3: data.question3,
    Evidence3: data.evidence3,
    Question4: data.question4,
    Evidence4: data.evidence4,
    Question5: data.question5,
    Evidence5: data.evidence5,
    Question6: data.question6,
    Evidence6: data.evidence6,
    Question7: data.question7,
    Evidence7: data.evidence7,
    Question8: data.question8,
    Evidence8: data.evidence8,
    Question9: data.question9,
    Evidence9: data.evidence9,
    Question10: data.question10,
    Evidence10: data.evidence10,
    Question11: data.question11,
    Evidence11: data.evidence11,
    Score: data.score,
    Category: data.category,
  };

  const SteinStore = require("stein-js-client");
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6447457aeced9b09e9cbcd62"
  );

  const ConditionalComponent = () => {
    if (page === 0) {
      return <WelcomePage />;
    } else if (page === 1) {
      return <DataDiri data={data} setData={setData} />;
    } else if (page === 2) {
      return <Question1 data={data} setData={setData} />;
    } else if (page === 3) {
      return <Question2 data={data} setData={setData} />;
    } else if (page === 4) {
      return <Question3 data={data} setData={setData} />;
    } else if (page === 5) {
      return <Question4 data={data} setData={setData} />;
    } else if (page === 6) {
      return <Question5 data={data} setData={setData} />;
    } else if (page === 7) {
      return <Question6 data={data} setData={setData} />;
    } else if (page === 8) {
      return <Question7 data={data} setData={setData} />;
    } else if (page === 9) {
      return <Question8 data={data} setData={setData} />;
    } else if (page === 10) {
      return <Question9 data={data} setData={setData} />;
    } else if (page === 11) {
      return <Question10 data={data} setData={setData} />;
    } else if (page === 12) {
      return <Question11 data={data} setData={setData} />;
    } else if (page === 13) {
      return <ConfirmPage data={data} setData={setData} />;
    } else if (page === 14) {
      return <ResultPage data={data} hasil={hasil} category={data.category} />;
    }
  };

  return (
    <>
      <div className="flex h-4/5 w-auto mx-10 flex-col justify-between my-10 text-center items-center justify-center ">
        <div className="mt-5">
          <h2>Under Maintenance</h2>
        </div>
      </div>
    </>
  );
}

export default Form;
