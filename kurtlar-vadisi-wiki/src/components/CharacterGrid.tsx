import { useState } from "react";

const CharacterGrid = ({ characters }: any) => {
  const [showChar, SetShowChar] = useState(0);
  const [isShow, SetShow] = useState(false);

  const onClose = () => {
    console.log("burada");
    SetShow(false);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">
        Character Wiki
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters
          ?.filter((c: any) => c.character)
          ?.map((character: any) => (
            <div
              onClick={() => {
                SetShowChar(character);
                SetShow(true);
              }}
              key={character.id}
              className="bg-indigo-800 text-white flex flex-col items-center justify-center rounded-md shadow-md h-[160px] cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                className="w-[100px] h-[100px]"
              />
              <p className="font-bold text-gray-800 text-center">
                {character.character}
              </p>
            </div>
          ))}

        <CharacterModal
          isShow={isShow}
          character={showChar}
          onClose={onClose}
        />

      </div>
    </div>
  );
};

export default CharacterGrid;

const CharacterModal = ({ character, onClose, isShow }: any) => {
  console.log(character);
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      className={`${
        isShow ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {character.character}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex items-center justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
              className="w-[100px] h-[100px] rounded-full"
            />
            </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Gerçek Adı : {character.original_name}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Cinsiyet : {character.gender == 1 ? "Kadın" : "Erkek"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
