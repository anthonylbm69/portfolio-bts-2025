import React from "react";
import Image from "next/image";

const CompetencesPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                Tableau de Compétences – BTS SIO
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                Retrouvez ci-dessous le tableau récapitulatif de mes compétences acquises
                durant la formation BTS SIO (Services Informatiques aux Organisations),
                option SLAM (Solutions Logicielles et Applications Métiers).
            </p>

            <div className="mt-5 flex flex-col items-center">
                <a href="/tableau-comp.pdf" download="tableau-competence-anthony.pdf">
                    <Image src="/tableau-comp.png" alt="curriculum vitae" width={500} height={500}
                           className="mt-5 w-full max-w-xs sm:max-w-sm md:max-w-md"/>
                </a>
                <a href="/tableau-comp.pdf" download="tableau-competence-anthony.pdf">
                    <button className="mt-4">📄 Télécharger mon tableau</button>
                </a>
            </div>
        </div>
    );
};

export default CompetencesPage;
