/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useReducer, useState } from "react";
import { json } from "stream/consumers";

export default function Home() {
  interface interfaceTodolist {
    ind: number;
    desc: string;
    stat: boolean;
  }
  const [any, forceUpdate] = useReducer(num => num + 1, 0);
  function handleChange() {
    forceUpdate();
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
    } else {
      if (localStorage.getItem("todos") !== null) {
        setTodos(
          JSON.parse(localStorage.getItem("todos")!).splice(i.ind - 1, 1)
        );
      }
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
  const statChange = (i: any, e: any) => {
    if (todos === undefined) {
      if (localStorage.getItem("todos") !== null) {
        setTodos(JSON.parse(localStorage.getItem("todos")!));
      }
    }
    if (localStorage.getItem("todos") === null) {
      try {
        // localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(todos));
        statChange(i, e);
      } catch {}
    } else {
      let qq: any = [];

      JSON.parse(localStorage.getItem("todos")!).map((q: any, w: any) => {
        if (i.ind === q.ind) {
          if (i.stat) {
            q.stat = false;
          } else {
            q.stat = true;
          }
          qq.push({
            ind: q.ind,
            desc: q.desc,
            stat: q.stat,
          });
        } else {
          qq.push({
            ind: q.ind,
            desc: q.desc,
            stat: q.stat,
          });
        }
      });

      localStorage.setItem("todos", JSON.stringify(qq));
      lgs = qq;
      setTodos(qq);
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
  // nextjs 온몸비틀기똥꼬쇼
  try {
    var lsg: any = localStorage.getItem("todos");
  } catch {
    var lsg: any;
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lsg = localStorage.getItem("todos");
    // console.log("asdasd");
    // console.log(lsg);
    // console.log(JSON.parse(localStorage.getItem("todos")!));
    // console.log(lsg);
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
        className="mx-auto text-center block mt-20 mb-10 h-[65.25px]"
        onSubmit={e => {
          e.preventDefault();
          add(e);
          // console.log(e);
        }}
      >
        <div className="inline-block ">
          <input
            type="text"
            name="inputText"
            className="mx-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2.5  sm:w-auto my-2.5 text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input text"
          />
        </div>
        <div className="inline-block align-middle">
          <button
            type="submit"
            className="mb-2.5 text-white  font-medium rounded-lg text-sm  sm:w-auto px-5 pt-2.5 text-center "
          >
            <div className=" flex justify-center items-center overflow-hidden gap-2 rounded-[100px] bg-[#6750a4]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-4 pr-6 py-2.5 bg-white/[0.12]">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z"
                    fill="white"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">
                  add
                </p>
              </div>
            </div>
          </button>
        </div>
      </form>

      {
        // todos?.length !== 0 && todos !== undefined
        lsg ? (
          <div>
            {lsg
              ? JSON.parse(lsg).map((i: any, x: any) => {
                  // console.log(lsg);
                  // console.log(x, i.stat);
                  return (
                    <div
                      key={i}
                      className="text-center m-auto max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] bg-[#f9f3ff]"
                    >
                      <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                        {/* <div className="flex-grow-0 flex-shrink-0 w-[360px] h-14 absolute left-0 top-0" /> */}
                        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 min-h-[56px] gap-4 pl-4 pr-6 py-2">
                          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative overflow-hidden">
                            <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[100px] bg-[#eaddff]">
                              <p className="p-[7px] w-10 h-10 absolute left-0 top-0 text-middle font-medium text-center text-[#21005d]">
                                {i.ind}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#1d1b20] ml-4 break-all">
                              {i.desc}
                            </p>
                          </div>
                          <div
                            className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5"
                            onClick={e => {
                              statChange(i, e);
                            }}
                          >
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6">
                              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative p-[11px] rounded-[100px]">
                                <input
                                  type="checkbox"
                                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] rounded-sm accent-[#6750a4] checked:border-none checked:bg-[#6750a4] ring-0 focus:ring-0"
                                  checked={i.stat}
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] rounded-sm bg-[#6750A4]"
                            onClick={e => {
                              handleOnClick(e, i);
                              handleChange();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              width="18"
                              height="18"
                              className="flex justify-center items-center flex-grow-0 flex-shrink-0"
                            >
                              <path
                                className=" fill-white"
                                d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    // <tr
                    //   key={x}
                    //   className="transition-all text-gray-600 dark:text-indigo-100 bg-gray-100 border-indigo-200 dark:bg-gray-700 dark:border-none font-['D2 coding']"
                    // >
                    //   <td className="border-none px-4 py-2 dark:border-none">
                    //     {i.ind}
                    //   </td>
                    //   <td className="border-none px-4  py-2 text-left dark:border-none break-words max-w-[250px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[1000px]">
                    //     {i.desc}
                    //   </td>
                    //   <td className="border-none px-4 py-4 dark:border-none">
                    //     {/* <button>check</button> */}
                    //     <div className=" m-auto">
                    //       <input
                    //         id="green-checkbox"
                    //         type="checkbox"
                    //         value=""
                    //         className="w-4 h-4 "
                    //       />
                    //       {/* <label
                    //       htmlFor="green-checkbox"
                    //       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    //     >
                    //       Check
                    //     </label> */}
                    //     </div>
                    //   </td>
                    //   <td className="border-none px-2 py-2 dark:border-none text-[12px]">
                    //     <button
                    //       className="bg-red-500 hover:bg-red-700 text-white  font-bold py-1 px-2 rounded"
                    //       onClick={e => {
                    //         handleOnClick(e, i);
                    //       }}
                    //     >
                    //       X
                    //     </button>
                    //   </td>
                    // </tr>
                  );
                })
              : null}
          </div>
        ) : (
          <div></div>
        )
      }
    </main>
  );
}
