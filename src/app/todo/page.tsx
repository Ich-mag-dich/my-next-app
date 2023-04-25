/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  interface interfaceTodolist {
    ind: number;
    desc: string;
    stat: boolean;
  }
  const [todos, setTodos] = useState<interfaceTodolist[]>();
  () => {
    if (!todos) {
      if (localStorage.getItem("todos") !== null) {
        setTodos(
          localStorage.getItem("todos") as unknown as interfaceTodolist[]
        );
      }
    }
  };
  const add = (t: any) => {
    if (t.target.inputText.value !== "") {
      let localdata: any = [];
      let lsget = localStorage.getItem("todos");
      if (lsget === null) {
        setTodos([{ ind: 1, desc: t.target.inputText.value, stat: false }]);
        localdata.push([
          { ind: 1, desc: t.target.inputText.value, stat: false },
        ]);
      } else {
        setTodos([
          ...JSON.parse(lsget!)!,
          {
            ind: JSON.parse(lsget).length + 1,
            desc: t.target.inputText.value,
            stat: false,
          },
        ]);
        localdata.push([
          ...JSON.parse(lsget),
          {
            ind: JSON.parse(lsget).length + 1,
            desc: t.target.inputText.value,
            stat: false,
          },
        ]);
      }
      t.target.reset();
      localStorage.setItem("todos", JSON.stringify(localdata[0]));
    }
    // console.log(localStorage.getItem("todos"));
  };
  var lgs: any;
  const set_number = (i: interfaceTodolist) => {
    setTodos(
      todos?.map(x => {
        if (x.ind > i.ind) {
          x.ind = x.ind - 1;
        }
        return x;
      })
    );
  };
  const del = (i: interfaceTodolist) => {
    if (todos !== undefined) {
      setTodos(todos.splice(i.ind - 1, 1));
    }
  };
  const alert_length = () => {
    console.log(todos);
    console.log(todos?.length);
  };
  const handleOnClick = (e: any, x: interfaceTodolist) => {
    del(x);
    set_number(x);
    if (todos !== undefined) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      if (localStorage.getItem("todos") === null) {
        try {
          localStorage.removeItem("todos");
        } catch {}
      } else {
        // console.log("qqqqqqqqqq");
        let qq: any = [];
        JSON.parse(localStorage.getItem("todos")!).map((i: any, w: any) => {
          if (i.ind !== x.ind) {
            // console.log("asd\n", i, x);
            if (i.ind > x.ind) {
              qq.push({
                ind: i.ind - 1,
                desc: i.desc,
                stat: i.stat,
              });
            } else {
              qq.push({
                ind: i.ind,
                desc: i.desc,
                stat: i.stat,
              });
            }
          }
        });
        localStorage.setItem("todos", JSON.stringify(qq));
        lgs = qq;
        setTodos(qq);
      }
    }
  };

  function table_builder() {
    if (todos === undefined) {
      return <div>no data</div>;
    }

    return todos.forEach(todo => {
      <tr>
        <td className="border px-4 py-2">{todo.ind}</td>
        <td className="border px-4 py-2">{todo.desc}</td>
        <td className="border px-4 py-2">
          <button>check</button>
        </td>
        <td className="border px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </td>
      </tr>;
    });
  }
  try {
    var lsg: any = localStorage.getItem("todos");
  } catch {
    var lsg: any;
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lsg = localStorage.getItem("todos");
    console.log(lsg);
  }, []);
  return (
    <main>
      {/* <div className="text-center">
        <button
          onClick={() => {
            alert_length();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          alert
        </button>
      </div> */}
      {/* <h1 className="text-center">todo page!</h1> */}

      <form
        className="mx-auto text-center block mt-20 mb-10"
        onSubmit={e => {
          e.preventDefault();
          add(e);
          // console.log(e);
        }}
      >
        <input
          type="text"
          name="inputText"
          className="mx2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2.5  sm:w-auto my-2.5 text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Input text"
        />

        <button
          type="submit"
          className="mx-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>

      {
        // todos?.length !== 0 && todos !== undefined
        lsg ? (
          <div>
            <table className="content-center mx-auto mb-32 table-fixed break-words max-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-24 sm:px-32 md:px-40 lg:px-64 py-2"></th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {lsg
                  ? JSON.parse(lsg!).map((i: any, x: any) => {
                      // console.log(lsg);
                      return (
                        <tr
                          key={x}
                          className="text-gray-600 dark:text-indigo-100 bg-indigo-100 border-indigo-200 dark:bg-gray-700 dark:border-none"
                        >
                          <td className="border-none px-4 py-2 dark:border-none">
                            {i.ind}
                          </td>
                          <td className="border-none px-4  py-2 text-left dark:border-none break-words max-w-[250px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[1000px]">
                            {i.desc}
                          </td>
                          <td className="border-none px-4 py-4 dark:border-none">
                            {/* <button>check</button> */}
                            <div className=" m-auto">
                              <input
                                id="green-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 "
                              />
                              {/* <label
                              htmlFor="green-checkbox"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Check
                            </label> */}
                            </div>
                          </td>
                          <td className="border-none px-2 py-2 dark:border-none text-[12px]">
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-2 rounded"
                              onClick={e => {
                                handleOnClick(e, i);
                              }}
                            >
                              Del
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )
      }
    </main>
  );
}
