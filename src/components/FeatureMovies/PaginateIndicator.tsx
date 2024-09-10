function PaginateIndicator() {
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        <li className="h-0.5 w-4 cursor-pointer bg-slate-100"></li>
        <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
        <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
        <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
      </ul>
    </div>
  );
}

export default PaginateIndicator;
