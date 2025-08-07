import './Body.css'

const Body = () => {
    const obj = {
        name : "왕찬웅",
        addr : "파주시",
        hp : "010-4937-3837"
    };
    // return(
    //     <>
    //         <h1>Body</h1>
    //         <h2>숫자{obj.number}는 {obj.number % 2 === 0 ? "짝수" : "홀수"}</h2>

    //     </>
    // );

    // if(obj.number % 2 === 0) {
    //     return <div>{obj.number}는 짝수입니다.</div>;
    // } else {
    //     return <div>{obj.number}는 홀수입니다.</div>
        // return null; //아무것도 출력하고 싶지 않을 때 null
    // }
    return(
        <>
            {/* <br />
            <form class="info">
                <div class="input"><label>이름</label><input /><br /></div>
                <div class="input"><label>나이</label><input></input></div>
            </form> */}
            <div>
                <p>이름     : {obj.name}</p>
                <p>주소     : {obj.addr}</p>
                <p>전화번호 : {obj.hp}</p>
            </div>
        </>
    )
};

export default Body;