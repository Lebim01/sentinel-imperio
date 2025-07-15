import ProductEssentials from "./ProductEssentials";

const ImperioEssentials = () => {
  return (
    <div className="rounded-lg w-full font-cinzel overflow-hidden">
      <div className="bg-primary flex flex-col items-center py-2 font-cinzel">
        <span className="font-bold text-white">IMPERIO</span>
        <span className="text-secondary">ESSENTIALS</span>
      </div>
      <div className="border-4 border-primary bg-secondary flex flex-col">
        <div className="flex p-4 bg-[#cbc1b5]">
          <div className="flex flex-col gap-6">
            <ProductEssentials
              bgClasses="from-[#2d303a] to-[#3350ce]"
              textPrimary="text-[#3350ce]"
              title="ANTIOXIDANTE MAESTRO"
              img="/img/glutashield.png?1"
              text={
                <>
                  ¿Sientes que envejeces más rápido, te recuperas lento o vives
                  estresado?
                  <br />
                  <br />
                  Esta fórmula con N-acetilcisteína (NAC), vitamina C y selenio
                  promueve la producción de glutatión, el antioxidante maestro
                  del cuerpo. Investigaciones del NIH (National Institutes of
                  Health) destacan al glutatión como clave en la reparación
                  celular, detoxificación y longevidad.
                </>
              }
            />
            <ProductEssentials
              bgClasses="from-[#1e2c3a] to-[#3f78c1]"
              textPrimary="text-[#396dac]"
              title="ENFOQUE Y RENDIMIENTO COGNITIVO"
              img="/img/nootropic.png"
              text={
                <>
                  ¿Sufres de fatiga mental, olvidos frecuentes o dificultad para
                  enfocarte más de 20 minutos?
                  <br />
                  <br />
                  Esta fórmula contiene L-teanina y L-tirosina, aminoácidos
                  estudiados por su efecto positivo en la reducción del estrés y
                  la mejora de la concentración. En un estudio del “Journal of
                  Clinical Psychiatry”, se demostró que la L-teanina puede
                  mejorar la función cognitiva bajo presión.
                </>
              }
            />
            <ProductEssentials
              bgClasses="from-[#241622] to-[#ab1a8a]"
              textPrimary="text-[#9d1a7d]"
              title="ESTABILIZA ENERGIA Y EVITA ANTOJOS"
              img="/img/sweet.png"
              text={
                <>
                  ¿Tienes antojos constantes o te da sueño después de comer?
                  <br />
                  <br />
                  Su mezcla de canela, cromo y moringa está diseñada para
                  estabilizar la glucosa en sangre. Según el “American Journal
                  of Clinical Nutrition”, la suplementación con cromo puede
                  mejorar la sensibilidad a la insulina y reducir los picos de
                  azúcar.
                </>
              }
            />
            <ProductEssentials
              bgClasses="from-[#1e6f53] to-[#5ae3b3]"
              textPrimary="text-[#26795d]"
              title="DETOX HERBAL - REGULA DIGESTION"
              img="/img/greenforce.png"
              text={
                <>
                  ¿Tienes antojos constantes o te da sueño después de comer?
                  <br />
                  <br />
                  Su mezcla de canela, cromo y moringa está diseñada para
                  estabilizar la glucosa en sangre. Según el “American Journal
                  of Clinical Nutrition”, la suplementación con cromo puede
                  mejorar la sensibilidad a la insulina y reducir los picos de
                  azúcar.
                </>
              }
            />
            <ProductEssentials
              bgClasses="from-[#2b3326] to-[#789b63]"
              textPrimary="text-[#5e8b43]"
              title="NEUROLÓGICO & ANTIINFLAMATORIO"
              img="/img/omega.png"
              text={
                <>
                  ¿Te cuesta concentrarte, tienes inflamación o vives con
                  estrés?
                  <br />
                  <br />
                  Este omega-3 con EPA y DHA apoya tu salud mental, reduce la
                  inflamación y protege tu corazón. Estudios han demostrado que
                  el DHA mejora la memoria y el enfoque, mientras el EPA ayuda a
                  regular el estado de ánimo y el sistema inmune.
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="bg-primary flex py-2 font-cinzel">
        <div className="w-full px-4">
          <p className="text-secondary font-bold mb-2 text-lg">INVERSION TOTAL</p>
          <div className="flex flex-col gap-2 text-white">
            <div className="flex justify-between items-center">
              <span>1 Glutashield</span>
              <span>
                <span className="font-bold">$891</span> mx
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>1 Nootropic</span>
              <span>
                <span className="font-bold">$1,458</span> mx
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>1 4Sweet-Control</span>
              <span>
                <span className="font-bold">$783</span> mx
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>1 Green Force</span>
              <span>
                <span className="font-bold">$459</span> mx
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>1 Omega-4Life</span>
              <span>
                <span className="font-bold">$825</span> mx
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center text-secondary font-bold text-lg">
              <span>Total</span>
              <span>
                <span className="font-bold line-through">$4,416</span> mx
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ImperioEssentials;
