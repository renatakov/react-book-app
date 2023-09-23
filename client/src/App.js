import React, { useEffect } from "react"; // Импорт React и useEffect
import axios from "axios";

const App = () => {
  // useEffect(() => {
  //   async function getResponse() {
  //     try {
  //       const response = await axios.get("https://www.googleapis.com/books/v1/volumes/STmeDAAAQBAJ?key=AIzaSyDZW1GsI_95nbr63_i8k6P4B1l-PcMnVKQ");
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Произошла ошибка при выполнении запроса:", error);
  //     }
  //   }

  //   getResponse(); // Вызываем функцию getResponse внутри useEffect

  // }, []); // Пустой массив зависимостей, чтобы useEffect вызывался только при монтировании компонента

  return (
    <>
      <h1>Book App</h1>
    </>
  );
}

export default App;
