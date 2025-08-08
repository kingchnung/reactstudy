import './MyComponent.css'

const MyComponent = ({name, age, email, likeNum, word, hobby}) => {
    

    const Print = () => {
    return (
      <table className="dataForm">
        
        <tr><th><p className="p1">이름: {name}</p></th></tr>
        <tr><th><p className="p2">나이: {age}</p></th></tr>
        <tr><th><p className="p3">이메일: {email}</p></th></tr>
        <tr><th><p className="p4">좋아하는 숫자: {likeNum}</p></th></tr>
        <tr><th><p className="p5">좋아하는 명언: {word}</p></th></tr>
        {hobby.map((hobby, index) => (
            <tr><th><p className="p6" key={index}>{hobby}</p></th></tr>
        ))}
        
      </table>
    );
  }
  return(
    <>
      <Print />
    </>
  );
};

export default MyComponent;