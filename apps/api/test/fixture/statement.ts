export function createStatement(courseId: number) {
  return {
    order: 1,
    chinese: "你好",
    english: "hi",
    soundmark: "/hi/",
    courseId,
  };
}

export function createMultipleStatement(courseId: number) {
  return [
    {
      order: 1,
      chinese: "我",
      english: "I",
      soundmark: "/aɪ/",
      courseId,
    },
    {
      order: 2,
      chinese: "喜欢",
      english: "like",
      soundmark: "/laɪk/",
      courseId,
    },
  ];
}
