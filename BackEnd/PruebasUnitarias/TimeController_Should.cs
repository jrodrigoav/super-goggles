using SuperGooglesAPI.Controllers;
using System;
using Xunit;

namespace PruebasUnitarias
{
    public class TimeController_Should
    {
        [Fact]
        public void ReturnServerTime()
        {
            //Arrange
            var currentTime = DateTime.Now;
            var controller = new TimeController();

            //Act
            var stringResult = controller.Get();
            var parsedTime = DateTime.Parse(stringResult);

            //Assert
            //Assert.True(currentTime <= parsedTime);

            Assert.Equal(currentTime.Year, parsedTime.Year);
            Assert.Equal(currentTime.Month, parsedTime.Month);
            Assert.Equal(currentTime.Day, parsedTime.Day);
            Assert.Equal(currentTime.Hour, parsedTime.Hour);
            Assert.Equal(currentTime.Minute, parsedTime.Minute);
            Assert.Equal(currentTime.Second, parsedTime.Second);
        }
    }
}
