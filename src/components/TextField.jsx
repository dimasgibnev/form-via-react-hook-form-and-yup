import styles from './TextField.module.css';

export const TextField = ({ label, register, name, errors }) => {
	return (
		<div className={styles['input-form']}>
			<label className={styles['input-form__label']} htmlFor={name}>
				{label}
			</label>

			<div className={styles['input-form__input']}>
				<input type="text" {...register(name)} id={name} />
				<span className={styles['input-form__error']}>
					{errors[name]?.message}
				</span>
			</div>
		</div>
	);
};
