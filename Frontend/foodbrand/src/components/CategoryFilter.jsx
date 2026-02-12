import "./CategoryFilter.css";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-bar">
      <button
        className={`category-btn ${selected === null ? "active" : ""}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${
            selected === cat.id ? "active" : ""
          }`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}



// ===========================================================================================


// export default function CategoryFilter({ categories, selected, onSelect }) {
//   return (
//     <div className="category-sidebar">
//       <h4>Categories</h4>

//       <p onClick={() => onSelect(null)}
//          className={!selected ? "active" : ""}>
//         All
//       </p>

//       {categories.map(cat => (
//         <p
//           key={cat.id}
//           onClick={() => onSelect(cat.id)}
//           className={selected === cat.id ? "active" : ""}
//         >
//           {cat.name}
//         </p>
//       ))}
//     </div>
//   );
// }




