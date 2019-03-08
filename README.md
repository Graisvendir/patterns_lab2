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
- ### делегирование

  fabricDefaultAdaptedRobot использует defaultAdoptedRobot.convertRideToRun(),  

- ### адаптер

  адаптирование robot под creature, адаптированный робот умеет бегать, а не ездить

- ### декоратор
  
  в методах паттерна "фабричный метод" использовано декорирование конструктора классов
  
- ### фабричный метод
  
  фабрика для сборки creatures
  
- ### приспособленец(flywigth)

  класс с кучей ссылок на ресурсы resourcesFlywight
  
- ### строитель

  robotBuilder позволяет создавать как обычного робота без возможностей, а потом прикрутит к нему колеса
  
- ### синглтон

  может быть только один Commander
  
- ### наблюдатель

  в папке observer лежат интерфейс подписчиков и абстрактный класс поставщика, Commander наследуется от Publisher, 
  Robot имплементирует от Subscriber

- ### цепочка обязанностей

  цепочка обязанностей от робота к командиру
