export default function Card({ ...props }) {
  if (props.title === undefined) props.title = "Title"
  if (props.children === undefined) props.children = <>Description</>

  return <>
    <div className="text-lg text-gray-02 mb-2">{props.title}</div>
    <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
      {props.children}
    </div>
  </>
}
