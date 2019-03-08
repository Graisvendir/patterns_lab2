# patterns_labs
1. Code rewiew
2. Делегирование и прокси
3. Adapter, Decorator, Composite, Iterator
4. Bridge, Flyweight, Facade, Information Expert
5. Factory method, Abstract factory, Singleton, Prototype
6. Builder, Object Pool
7. State, Memento, Observer
8. Command, Indirection, Visitor

## minimal patterns
- делегирование                 - fabricDefaultAdaptedRobot использует defaultAdoptedRobot.convertRideToRun(),  
- адаптер                       - адаптирование robot под creature,  
- декоратор,                    - сам фабричный метод - один большой декоратор
- фабричный метод,              - фабрика для сборки creatures
- приспособленец(flywigth),     - класс с кучей ссылок на ресурсы Resources, сюда же прикручен одиночка
- строитель,                    - robot Builder
- синглтон,                     - может быть только один Commander
- наблюдатель,                  - 
- цепочка обязанностей.
