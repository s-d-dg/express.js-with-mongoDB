import cron from "node-cron";

const task = cron.schedule("*/3 * * * * *", async (ctx) => {
  console.log("Trading bot executed: ", ctx.date, " with task: ", ctx.task);
});

export const startTradingBot = () => {
  task.start();
};

export const stopTradingBot = () => {
  task.stop();
};

export const destroyTradingBot = () => {
  task.destroy();
};
