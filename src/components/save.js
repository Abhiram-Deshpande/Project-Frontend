<>
<form onSubmit={handleSubmit}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 200,
    }}
  >
    <label htmlFor="title-input"></label>
    <input
      placeholder="ENTER THE TITLE"
      id="title"
      type="text"
      value={title}
      onChange={handleTitleChange}
    />
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <label style={{}} htmlFor="file-input"></label>

    <input
      id="image"
      type="file"
      accept="image/jpg, image/jpeg, image/png"
      onChange={handleFileChange}
    />
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <button style={{ width: 200, height: 20 }} type="submit">
      DeBlurr
    </button>
  </div>
</form>
</>