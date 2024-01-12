"use cliente";

export default function FormRadio() {
  return (
    <form className="flex gap-3">
      <div className="flex flex flex-col-reverse gap-2 items-center">
        <label htmlFor="1">1</label>
        <input type="radio" value={1} name="1" />
      </div>
    </form>
  );
}
