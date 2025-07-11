export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-2 bg-black">
      <h1 className="text-white text-xl font-bold">OZ코딩스쿨</h1>
      <ul className="flex gap-5 text-white text-sm font-normal">
        <li className="cursor-pointer hover:underline">로그인</li>
        <li className="cursor-pointer hover:underline">회원가입</li>
        <li className="cursor-pointer hover:underline">내클래스</li>
      </ul>
    </header>
  );
}
