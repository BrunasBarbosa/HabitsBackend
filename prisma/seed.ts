import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const firstHabitId = '2332aaa2-56fb-43f4-b52a-9a8dace83537';
const firstHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const secondHabitId = '4f2389d1-206a-49d0-a63e-9520dce99e0b';
const secondHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const thirdHabitId = '5dc0a211-0cf2-4c67-9d9a-4f325fdcb3e8';
const thirdHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const fourthHabitId = '6d1e4e6f-eb61-4527-a70c-7f7d76441f93';
const fourthHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const fifthHabitId = '6f25b2ba-dffb-42ae-84d1-4dd0a3d59abf';
const fifthHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const sixthHabitId = '9ed15b5c-b792-455e-a965-9a7597154e47';
const sixthHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const seventhHabitId = 'ac7327e4-5b33-41eb-8382-ede8eb128c5e';
const seventhHabitCreationDate = new Date('2023-01-01T03:00:00.000');

const eighthHabitId = 'aea33ab4-f747-4c99-8813-f38cb96fb01c';
const eighthHabitCreationDate = new Date('2023-01-01T03:00:00.000');

async function run() {
  await prisma.habitWeekDays.deleteMany();
  await prisma.dayHabit.deleteMany();
  await prisma.habit.deleteMany();
  await prisma.day.deleteMany();

  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Não ingeri álcool',
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Acordei até as 8:00',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Bebi pelo menos 2L de água',
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fourthHabitId,
        title: 'Dormi pelo menos 7hr/noite',
        created_at: fourthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fifthHabitId,
        title: 'Dediquei 30 min para aprender uma nova habilidade',
        created_at: fifthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: sixthHabitId,
        title: 'Fiz exercícios por pelo menos 20 min',
        created_at: sixthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: seventhHabitId,
        title: 'Comi saudável',
        created_at: seventhHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: eighthHabitId,
        title: 'Li mín 5 páginas de 1 livro',
        created_at: eighthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

  ]);

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]

        }
      }
    }),

  
    prisma.day.create({
      data: {
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: fourthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        date: new Date('2023-01-24T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: fourthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]

        }
      }
    }),

    prisma.day.create({
      data: {
        date: new Date('2023-01-27T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: fourthHabitId },
            { habit_id: sixthHabitId },
          ]

        }
      }
    }),
  ]);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });