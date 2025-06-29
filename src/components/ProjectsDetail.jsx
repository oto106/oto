import { useParams } from "react-router-dom";
import { useState } from "react";

function ProjectDetail() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment) return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <img src={`/images/projects/apt${id}.jpg`} alt={`Project ${id}`} className="rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-4">პროექტის დეტალები #{id}</h2>
      <p className="text-gray-700 mb-6">ეს არის დეტალური აღწერა არჩეული ბინის შესახებ.</p>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-3 border rounded mb-2"
          rows="4"
          placeholder="დატოვე კომენტარი..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="bg-[#254D70] text-white px-4 py-2 rounded">გაგზავნა</button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-2">კომენტარები</h3>
        <ul className="space-y-2">
          {comments.map((c, i) => (
            <li key={i} className="bg-gray-100 p-3 rounded">{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetail;