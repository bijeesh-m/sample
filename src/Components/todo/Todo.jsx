import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deleteTodo, editTodo } from "../../features/todoSlice";

const Todo = () => {
    const todos = useSelector((state) => state.todos);

    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");
    const [filterType, setFilterType] = useState("all");

    const [editId, setEditId] = useState("");
    const [todoText, setTodoText] = useState("");
    const [editMode, setEditMode] = useState(false);

    const inputRef = useRef(null);

    // editMode

    const handleEdit = (todoId, todoText) => {
        setEditId(todoId);
        setTodoText(todoText);
        setEditMode(true);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [editMode]);

    const filteredTodos = useMemo(() => {
        if (filterType === "all") {
            return todos;
        } else if (filterType === "completed") {
            return todos.filter((todo) => todo.completed);
        } else {
            return todos.filter((todo) => !todo.completed);
        }
    }, [filterType, todos]);

    console.log(filteredTodos);

    const handleSaveTodo = () => {
        dispatch(editTodo({ todoId: editId, todoText: todoText }));
        setEditId("");
        setTodoText("");
        setEditMode(false);
    };
    const handleCancelEdit = () => {
        setEditId("");
        setTodoText("");
        setEditMode(false);
    };

    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (!todo.length) {
            setError("Field cannot be empty!");
        } else {
            dispatch(addTodo(todo));
            setError("");
            setTodo("");
        }
    };
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    return (
        <div className=" my-5 flex justify-center  flex-col items-center">
            <div>
                <form onSubmit={handleAddTodo}>
                    <input
                        className=" rounded-l-lg md:w-xl border outline-none px-5 py-3 bg-slate-50"
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                    />
                    <button className=" border px-5 rounded-r-lg py-3">Add</button>
                    {error && <p className=" text-red-600 mt-1 font-bold text-xs">{error}</p>}
                </form>
            </div>
            <div className="my-5">
                <h1 className=" text-2xl font-bold text-center">Todos</h1>
                {todos.length > 0 && (
                    <select
                        className=" outline-none border rounded bg-slate-200 my-2 text-xs py-2 py-3"
                        name="filterType"
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                )}
                {filteredTodos.map((t) => {
                    return (
                        <div
                            key={t.todoId}
                            className={` my-2 text-xl p-2 flex justify-between items-center rounded ${
                                t.completed ? "bg-green-500" : "bg-gray-200"
                            }  md:w-xl `}
                        >
                            {editMode && editId === t.todoId ? (
                                <div className=" flex w-full gap-2">
                                    <input
                                        className="flex-1 outline-none"
                                        ref={inputRef}
                                        type="text"
                                        name="editField"
                                        id="editField"
                                        value={todoText}
                                        onChange={(e) => setTodoText(e.target.value)}
                                    />
                                    <button
                                        onClick={handleCancelEdit}
                                        className=" border px-5 text-xs py-1 rounded-full bg-gray-100 text-gray-800 "
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveTodo}
                                        className=" border px-5 text-xs py-1 rounded-full bg-blue-100 text-blue-800 "
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div className=" flex justify-between items-center gap-2 w-full">
                                    <p className=" break-words">{t.todoText}</p>
                                    <div className=" flex gap-2">
                                        <button
                                            onClick={() => handleEdit(t.todoId, t.todoText)}
                                            className=" border px-5 text-xs py-1 rounded-full bg-yellow-100 text-yellow-800 "
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteTodo(t.todoId)}
                                            className=" border px-5 text-xs py-1 rounded-full bg-red-100 text-red-800 "
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => dispatch(completeTodo(t.todoId))}
                                            className=" border px-5 text-xs py-1 rounded-full bg-blue-100 text-blue-800 "
                                        >
                                            {t.completed ? "Undo" : "Done"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {!todos.length && <p className=" text-xl font-bold text-red-500">No todos found!</p>}
            </div>
        </div>
    );
};

export default Todo;
