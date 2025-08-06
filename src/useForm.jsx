import React, { useState } from "react";

function UseForm() {
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const formHandle = async (e) => {
    e.preventDefault();
    setPending(true);
    setMsg("");

    try {
      await new Promise((r) => setTimeout(r, 1000));
      setMsg(`Submitted: ${name} (${email})`);
    } catch {
      setMsg("Submission failed");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <h1 className="ml-30 mt-5 text-2xl font-bold">Use of useForm</h1>
      <form
        onSubmit={formHandle}
        className="flex flex-col gap-2 ml-30 mt-2 max-w-md"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
      {msg && <p className="ml-30 mt-2">{msg}</p>}
    </>
  );
}

export default UseForm;
