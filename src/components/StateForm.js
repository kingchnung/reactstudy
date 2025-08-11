import { useState } from "react"

const StateForm = () => {
    const [form, setForm] = useState({
        name:"홍길동",
        age:25
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const show = () => {
        console.log(`안녕하세요. ${form.name} (${form.age}세) 님!`);
    };

    return (
        <form className="form">
            <div>
                <label htmlFor="name">이름 : </label>
                <input type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                />
            </div>
            <div>
                <label htmlFor="age">나이 : </label>
                <input type="number"
                        id="age"
                        name="age"
                        value={form.age}
                        onChange={handleForm} />
            </div>
            <div>
                <button type="button" onClick={show}>출력</button>
            </div>
            <p>안녕하세요. {form.name} ({form.age}세) 님!</p>

        
        </form>
    )
}

export default StateForm;
