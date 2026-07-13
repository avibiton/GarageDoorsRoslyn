import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e293b",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 26,
            height: 22,
            display: "flex",
            flexDirection: "column",
            borderRadius: "3px 3px 0 0",
            overflow: "hidden",
            border: "1.5px solid #78350f",
          }}
        >
          <div style={{ flex: 1, display: "flex", background: "#facc15", borderBottom: "1.5px solid #78350f" }} />
          <div style={{ flex: 1, display: "flex", background: "#fbbf24", borderBottom: "1.5px solid #78350f" }} />
          <div style={{ flex: 1, display: "flex", background: "#facc15", borderBottom: "1.5px solid #78350f" }} />
          <div style={{ flex: 1, display: "flex", background: "#fbbf24" }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
