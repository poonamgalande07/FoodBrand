export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => onSelect(null)}
        style={{
          marginRight: "10px",
          background: selected === null ? "#333" : "#ccc",
          color: "white"
        }}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          style={{
            marginRight: "10px",
            background: selected === cat.id ? "#333" : "#ccc",
            color: "white"
          }}
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




