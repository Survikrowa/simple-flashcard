import { useState, useCallback } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useLocalStorage from "use-local-storage-state";
import { Button } from "../../button/Button";
import styles from "./AddFlashcardsForm.module.scss";
import { useMessageDispatch } from "../../../hooks/useMessage";

type FlashCardInputs = {
  id: string;
};

type FormData = {
  title: string;
  description: string;
  difficulty: string;
  inputs: FormInputsValues;
};

type FormInputsValues = {
  [key: string]: string;
};

const initialState = [{ id: uuid() }, { id: uuid() }];

export const AddFlashcardsForm = () => {
  const history = useHistory();
  const dispatch = useMessageDispatch();
  const [flashcards, setFlashcards] = useLocalStorage("flashcards", [{}]);
  const [flashCardInputs, setFlashCardInputs] = useState<FlashCardInputs[]>(
    initialState
  );
  const [isValid, setIsValid] = useState(true);
  const { handleSubmit, register, errors, control, trigger } = useForm<any>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const appendInput = useCallback(() => {
    setFlashCardInputs([...flashCardInputs, { id: uuid() }]);
  }, [flashCardInputs]);

  const removeInput = useCallback(
    (index: number) => {
      setFlashCardInputs([
        ...flashCardInputs.slice(0, index),
        ...flashCardInputs.slice(index + 1),
      ]);
    },
    [flashCardInputs]
  );

  const addNewFlashcardsToLS = (formData: FormData) => {
    setFlashcards([...flashcards, formData]);
  };

  const handleAddFlashcardButton = async () => {
    const isInputValid = await trigger();
    setIsValid(isInputValid);
    if (isInputValid) {
      appendInput();
    }
  };

  const inputs = flashCardInputs.map((item, i) => (
    <div key={item.id}>
      <Controller
        name={`field${item.id}`}
        control={control}
        defaultValue={item.id}
        rules={{ required: true }}
        render={({ name }) => {
          return (
            <div className={styles.flashcardCreator}>
              <label>
                <input
                  name={name}
                  type="text"
                  ref={register({ required: true })}
                  placeholder="Wpisz pojęcie..."
                  className={styles.input}
                />
                Pojęcie
              </label>
              {errors[name]?.type === "required" && (
                <span className={styles.validationErrorMessage}>
                  Pole nie może być puste
                </span>
              )}
              <label>
                <input
                  name={name + "second"}
                  type="text"
                  ref={register({ required: true })}
                  placeholder="Wpisz definicję..."
                  className={styles.input}
                />
                Definicja
              </label>
              {errors[name + "second"]?.type === "required" && (
                <span className={styles.validationErrorMessage}>
                  Pole nie może być puste
                </span>
              )}
              {flashCardInputs.length > 2 && (
                <Button role="danger" onClick={() => removeInput(i)}>
                  Remove input
                </Button>
              )}
            </div>
          );
        }}
      />
    </div>
  ));

  const handleFormSubmit: SubmitHandler<any> = (data) => {
    const { title, description, difficulty, ...inputs } = data;

    const formData = {
      title,
      description,
      difficulty,
      inputs: {
        ...inputs,
      },
    };
    setIsValid(true);
    addNewFlashcardsToLS(formData);
    dispatch({ type: "addMessage", payload: "Pomyślnie dodano fiszki!" });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.flashcardGroupContainer}>
        <label className={styles.label}>
          <input
            type="text"
            placeholder="Wpisz tytuł..."
            name="title"
            ref={register({ required: true })}
            className={styles.input}
          />
          {errors.title?.type === "required" && (
            <span className={styles.validationErrorMessage}>
              Pole nie może być puste
            </span>
          )}
          <span>Tytuł</span>
        </label>
        <label className={styles.label}>
          <input
            type="text"
            placeholder="Dodaj opis..."
            name="description"
            ref={register({ required: true })}
            className={styles.input}
          />
          {errors.description?.type === "required" && (
            <span className={styles.validationErrorMessage}>
              Pole nie może być puste
            </span>
          )}
          <span>Opis</span>
        </label>
        <div className={styles.difficultyContainer}>
          <span>Poziom zestawu</span>
          <div className={styles.checkboxContainer}>
            <label className={styles.checkboxEasy}>
              <input
                type="radio"
                name="difficulty"
                value="easy"
                ref={register({ required: true })}
              />
              <span>P</span>
            </label>
            <label className={styles.checkboxNormal}>
              <input
                type="radio"
                name="difficulty"
                value="normal"
                ref={register({ required: true })}
              />
              <span>Ś</span>
            </label>
            <label className={styles.checkboxHard}>
              <input
                type="radio"
                name="difficulty"
                value="hard"
                ref={register({ required: true })}
              />
              <span>Z</span>
            </label>
          </div>
          {errors.difficulty?.type === "required" && (
            <span className={styles.validationErrorMessage}>
              Wybierz poziom zestawu!
            </span>
          )}
        </div>
      </div>
      <div className={styles.flashcardsInputsContainer}>
        {inputs}
        <div className={styles.buttonsContainer}>
          <Button onClick={handleAddFlashcardButton} disabled={!isValid}>
            Dodaj fiszkę
          </Button>
          <Button type="submit">Zapisz</Button>
        </div>
      </div>
    </form>
  );
};
