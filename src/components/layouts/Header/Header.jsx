import React from 'react';
import HeaderCategory from './headerCategory';

export default function Header() {
  return (
    <div className="bg-teal-500 p-2">
      <div className="flex flex-row items-center justify-between p-6">
        <div className="flex flex-grow-0 items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Học tích cực
          </span>
        </div>
        <div className="relative text-gray-600 w-1/3">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <HeaderCategory title="Đặt câu hỏi" />
        <HeaderCategory title="Thông báo của tôi" />

        <div className="flex flex-col  flex-grow ">
          <HeaderCategory title="Đăng nhập" />
          <HeaderCategory title="Đăng ký" />
        </div>
        <a
          href="/"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Đã lưu
        </a>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <HeaderCategory title="Hỏi đáp" />
          <HeaderCategory title="Khoá học" />
          <HeaderCategory title="Thi tự luận" />
          <HeaderCategory title="Đề thi" />
          <HeaderCategory title="Đề ra kỳ này" />
          <HeaderCategory title="Chủ đề" />
          <HeaderCategory title="Cập nhật" />
        </div>
      </div>
    </div>
  );
}
